# Clear the screen.
Clear-Host;

# Get the current folder.
$currentDirectory = Get-Location;

# Get the subdirectories of the current folder.
$subdirectories = Get-ChildItem $currentDirectory | ? {$_.PSIsContainer}

# Iterate through the subdirectores.
foreach ($subdirectory in $subdirectories) {
    Set-Location $subdirectory.FullName;
    Write-Host "`n`n`n# --------------------------------------------------------------------------" -ForegroundColor Green;
    Write-Host "Fixing NPM Packages for example:" $subdirectory.Name -ForegroundColor Green;
    Write-Host "# --------------------------------------------------------------------------" -ForegroundColor Green;
    Invoke-Expression "npm audit fix";
}

Set-Location $currentDirectory;