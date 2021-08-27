install du projet :

    - npm uninstall -g ionic 

    - npm install -g @ionic/cli

    - npm install
   
lancer le serveur :

    - ionic serve
    - 
    - ionic cordova run android -l     (avoir installer java et les variable environnement)

modifier la version apk :

    - Ouvrez le fichier config.xml et modifier l’id et la version de votre application
        
    - ionic cordova build android --prod --release

    - jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk my-alias