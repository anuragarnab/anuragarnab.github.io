find . -type f -print0 | xargs -0 chmod 744
find . -type d -print0 | xargs -0 chmod 755
