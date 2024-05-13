class BaseCar {
    showCost() {
        throw new Error('Method not implemented!')
    }
}

class MastodonCar extends BaseCar {
    showCost() {
        console.log('Mastodon cost 1 Gs.')
    }
}

class RhinoCar extends BaseCar {
    showCost() {
        console.log('Rhino cost 2 Gs.')
    }
}

class CarFactory {
    makeCar() {
        throw new Error('Method not implemented!')
    }
}

class MastodonCarFactory extends CarFactory {
    makeCar() {
        return new MastodonCar();
    }
}

class RhinoCarFactory extends CarFactory {
    makeCar() {
        return new RhinoCar();
    }
}

function appFactory(factory) {
    const car =  factory.makeCar();
    car.showCost();
}

// appFactory(new MastodonCarFactory())
// appFactory(new RhinoCarFactory())

function createFactory(type) {
    const factories = {
        mastodon: MastodonCarFactory,
        rhino: RhinoCarFactory
    }
    const Factory =  factories[type]
    return new Factory();
}

appFactory(createFactory('mastodon'))
appFactory(createFactory('rhino'))