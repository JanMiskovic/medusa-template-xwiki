wt.exe -w 1 nt cmd /k "cd %~dp0\medusa && yarn medusa develop
wt.exe -w 1 nt cmd /k "cd %~dp0\medusa-storefront && yarn run dev"
wt.exe -w 1 nt cmd /k "meilisearch --master-key %MEILISEARCH_MASTER_KEY%"
REM wt.exe -w 1 nt cmd /k "wsl sudo service redis-server start"
wt.exe -w 1 nt cmd /k "cd %~dp0 && code ."