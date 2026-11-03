Add-Type -AssemblyName System.Drawing

$logoPath = Resolve-Path "client/src/assets/companyLogo.png"
$targets = @(
  Get-ChildItem "client/public/assets/acis-*.png"
  Get-ChildItem "client/public/assets/acisDashboard.png"
  Get-ChildItem "client/public/assets/acisDashboard-v2.png" -ErrorAction SilentlyContinue
)

$logo = [System.Drawing.Image]::FromFile($logoPath)

try {
  foreach ($file in $targets) {
    $sourceImage = [System.Drawing.Image]::FromFile($file.FullName)
    $bitmap = New-Object System.Drawing.Bitmap $sourceImage.Width, $sourceImage.Height

    try {
      $copyGraphics = [System.Drawing.Graphics]::FromImage($bitmap)
      $copyGraphics.DrawImage($sourceImage, 0, 0, $sourceImage.Width, $sourceImage.Height)
      $copyGraphics.Dispose()
      $sourceImage.Dispose()

      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

      $headerRect = New-Object System.Drawing.Rectangle 0, 0, 186, 74
      $bgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 5, 5, 5))
      $graphics.FillRectangle($bgBrush, $headerRect)
      $bgBrush.Dispose()

      $logoWidth = 72
      $logoHeight = [int][Math]::Round($logo.Height * ($logoWidth / [double]$logo.Width))
      $logoX = 18
      $logoY = 11
      $logoRect = New-Object System.Drawing.Rectangle $logoX, $logoY, $logoWidth, $logoHeight
      $graphics.DrawImage($logo, $logoRect)

      $graphics.Dispose()
      $tempPath = "$($file.FullName).tmp.png"
      if (Test-Path $tempPath) {
        Remove-Item -LiteralPath $tempPath -Force
      }
      $bitmap.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
      Remove-Item -LiteralPath $file.FullName -Force
      Move-Item -LiteralPath $tempPath -Destination $file.FullName -Force
    }
    finally {
      if ($sourceImage) {
        $sourceImage.Dispose()
      }
      $bitmap.Dispose()
    }
  }
}
finally {
  $logo.Dispose()
}
