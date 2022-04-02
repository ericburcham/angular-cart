@echo off
set /p msg="Message for point commit (no push): "
@echo on

git add .
git commit -m "%msg%"

echo
echo Done!
