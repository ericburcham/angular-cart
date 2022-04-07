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
    Write-Host "Updating Packages and dependencies for example:" $subdirectory.Name -ForegroundColor Green;
    Write-Host "# --------------------------------------------------------------------------" -ForegroundColor Green;
    
    # Remove package-lock so we can rebuild it from scratch.
    Remove-Item .\package-lock.json;

    # Update angular CLI
    Remove-Item .\node_modules\ -Force -Recurse;
    npm uninstall --save-dev @angular/cli;
    npm install --save-dev @angular/cli@latest;

    # Update package dependencies
    npm update --save;

    # Fix vulnerabilities
    npm audit fix;

    # Install packages from final results
    npm install --force;
}

Set-Location $currentDirectory;