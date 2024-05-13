interface BaseCar {
    showCost(): void
}

class MastodonCar implements BaseCar {
    showCost(): void {
        console.log('Mastodon cost 1 Gs.')
    }
}

class RhinoCar implements BaseCar {
    showCost(): void {
        console.log('Rhino cost 2 Gs.')
    }
}

interface CarFactory {
    makeCar(): BaseCar
}

class MastodonCarFactory implements CarFactory {
    makeCar(): BaseCar {
        return new MastodonCar();
    }
}

class RhinoCarFactory implements CarFactory {
    makeCar(): BaseCar {
        return new RhinoCar();
    }
}

function appFactory(factory: CarFactory) {
    const car: BaseCar =  factory.makeCar();
    car.showCost();
}

appFactory(new MastodonCarFactory())
appFactory(new RhinoCarFactory())


type FactoryType = "mastodon" | "rhino";
function createFactory(type: FactoryType) {
    const factories = {
        mastodon: MastodonCarFactory,
        rhino: RhinoCarFactory
    }
    const Factory =  factories[type]
    return new Factory();
}

appFactory(createFactory('mastodon'))
appFactory(createFactory('rhino'))

export {}