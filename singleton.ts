class SingletonTS {

    private static instance: SingletonTS;
    private version: String;
    
    private constructor(version: string) {
        this.version = version;
    }

    static getInstance(version: string): SingletonTS {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS(version);
        }
        return SingletonTS.instance;
    }
}

function appSingletonTS() {
    const singleton1 = SingletonTS.getInstance("version-1");
    const singleton2 = SingletonTS.getInstance("version-2");
    const singleton3 = SingletonTS.getInstance("version-3");
    const singleton4 = new SingletonTS();
    console.log(singleton1 === singleton2);
    console.log(singleton1 === singleton3);
}

appSingletonTS();