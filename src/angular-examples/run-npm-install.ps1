# Clear the screen.
Clear-Host;

# Get the current folder.
$currentDirectory = Get-Location;

# Get the subdirectories of the current folder.
$subdirectories = Get-ChildItem $currentDirectory | Where-Object {$_.PSIsContainer}

# Iterate through the subdirectores.
foreach ($subdirectory in $subdirectories) {
    Set-Location $subdirectory.FullName;
    Write-Host "`n`n`n# --------------------------------------------------------------------------" -ForegroundColor Green;
    Write-Host "Installing NPM Packages for example:" $subdirectory.Name -ForegroundColor Green;
    Write-Host "# --------------------------------------------------------------------------" -ForegroundColor Green;
    npm install --force;
}

Set-Location $currentDirectory;