Add-Type -AssemblyName System.Drawing

$sourcePath = Resolve-Path "client/public/assets/acis-dashboard.png"
$targetPath = Resolve-Path "client/public/assets/acisDashboard.png"

$sourceImage = [System.Drawing.Image]::FromFile($sourcePath)
$targetImage = [System.Drawing.Image]::FromFile($targetPath)
$outputBitmap = New-Object System.Drawing.Bitmap $targetImage.Width, $targetImage.Height

try {
  $graphics = [System.Drawing.Graphics]::FromImage($outputBitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

  $graphics.DrawImage($targetImage, 0, 0, $targetImage.Width, $targetImage.Height)

  $headerRect = New-Object System.Drawing.Rectangle 0, 0, 186, 74
  $backgroundBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 5, 5, 5))
  $graphics.FillRectangle($backgroundBrush, $headerRect)
  $backgroundBrush.Dispose()

  $logoPath = Resolve-Path "client/src/assets/companyLogo.png"
  $logoImage = [System.Drawing.Image]::FromFile($logoPath)
  $logoWidth = 84
  $logoHeight = [int][Math]::Round($logoImage.Height * ($logoWidth / [double]$logoImage.Width))
  $logoRect = New-Object System.Drawing.Rectangle 14, 9, $logoWidth, $logoHeight
  $graphics.DrawImage($logoImage, $logoRect)
  $logoImage.Dispose()
  $graphics.Dispose()

  $tempPath = "$targetPath.tmp.png"
  if (Test-Path $tempPath) {
    Remove-Item -LiteralPath $tempPath -Force
  }
  $outputBitmap.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
  Remove-Item -LiteralPath $targetPath -Force
  Move-Item -LiteralPath $tempPath -Destination $targetPath -Force
}
finally {
  $sourceImage.Dispose()
  $targetImage.Dispose()
  $outputBitmap.Dispose()
}
