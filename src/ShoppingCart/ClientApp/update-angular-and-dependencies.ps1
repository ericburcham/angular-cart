# Clear the screen.
Clear-Host;

# Get the current folder.
$currentDirectory = Get-Location;

# Header
Write-Host "`n`n`n# --------------------------------------------------------------------------" -ForegroundColor Green;
Write-Host "Updating Packages and dependencies for example:" $currentDirectory.Name -ForegroundColor Green;
Write-Host "# --------------------------------------------------------------------------" -ForegroundColor Green;

# Remove package-lock so we can rebuild it from scratch.
Remove-Item .\package-lock.json -ErrorAction SilentlyContinue;

# Update angular CLI
Remove-Item .\node_modules\ -ErrorAction SilentlyContinue -Force -Recurse;
npm uninstall --force --save-dev @angular/cli;
npm install --force --save-dev @angular/cli@latest;

# Update package dependencies
npm update --force --save;

# Fix vulnerabilities
npm audit fix;

# Install packages from final results
npm install --force;
