User
echo 'Do you want to do VS code work around? y/n'
read x
if [ "$x" = "y" ]
then	
	FILE=.gitmodules.bkp
	if [ -f "$FILE" ]; then    
		cp .gitmodules.bkp .gitmodules		
	fi
fi

cd src/app
git clone https://github.com/soorajnr/web-sharedLibs.git --single-branch -b main 

echo Do you want to clone Admin Plugin? y/n
read x
if [ "$x" = "y" ]
then	
	git clone https://github.com/soorajnr/web-plugin-admin.git --single-branch -b main 
fi
