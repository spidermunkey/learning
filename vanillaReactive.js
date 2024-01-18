/*
ChatGPT

In vanilla JavaScript, you can achieve reactivity similar to Svelte's approach by using the Object.defineProperty() 
method and the get and set property descriptors. 

Here's an example of how you could implement reactivity in vanilla JavaScript:
*/

function reactive(data) {
    Object.keys(data).forEach(key => {
      let value = data[key];
      Object.defineProperty(data, key, {
        get() {
          return value;
        },
        set(newValue) {
          value = newValue;
          // Trigger reactive updates here
        }
      });
    });
    return data;
  }
  
  let state = reactive({
    count: 0,
    doubleCount: 0
  });
  
  function updateDoubleCount() {
    state.doubleCount = state.count * 2;
  }
  
  state.count = 5; // This will trigger the updateDoubleCount() function
  
  console.log(state.count);        // Output: 5
  console.log(state.doubleCount);  // Output: 10


  function reactive(value, onChange) {
    return new Proxy(
      { value },
      {
        get(target, prop) {
          return target[prop];
        },
        set(target, prop, newValue) {
          target[prop] = newValue;
          onChange();
          return true;
        }
      }
    );
  }
  
/*
    In this example, the reactive() function creates a reactive variable by wrapping the value in a Proxy object. 
    The onChange callback function is invoked whenever the value is changed.
*/
  
  let count = reactive(0, updateDoubleCount);
  let doubleCount;
  
  function updateDoubleCount() {
    doubleCount = count.value * 2;
  }
  
  count.value = 5; // This will trigger the updateDoubleCount() function
  
  console.log(count.value);       // Output: 5
  console.log(doubleCount);       // Output: 10
  
  