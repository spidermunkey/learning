function Binding(b) {
    this.element = b.element;
    this.value = b.object[b.property];
    this.attribute = b.attribute;
    // this.value is first set to the value of b.object[b.property];
    this.valueGetter = () => {
        return this.value;
    }

    this.valueSetter = (val) => {
        this.value = val;
        this.element[this.attribute] = val;
    }

    if (b.event)
        this.element.addEventListener(
            b.event, 
            () => this.value = this.element[this.attribute])
    

    Object.defineProperty(b.object, b.property, {
        get: this.valueGetter,
        set: this.valueSetter
    })

    /**
     * whenever b.object[b.property] is set with the equals sign (=), 
     * it will call this.valueSetter(=val)
     */

    b.object[b.property] = this.value;
}

export function HTMLBinding(b) {

    this.elementBindings = [];
    this.value = b.object[b.property]

    this.valueGetter = () => {
        return this.value;
    }

    this.valueSetter = (val) => {
        this.value = val;
        this.elementBindings
            .forEach(binding => binding[binding.attribute] = val);
    }        

    this.addBinding = (element,attribute,event) => {
        const binding = {
            element,
            attribute,
        }

        if (event)
            element.addEventListener(
                event, 
                () => this.valueSetter(element[attribute]))
        
        binding.event = event;
        this.elementBindings.push(binding)
        element[attribute] = this.value;
        return this;
    }

    Object.defineProperty(b.object,b.property, {
        get: this.valueGetter,
        set: this.valueSetter
    });

    b.object[b.property] = this.value;

}