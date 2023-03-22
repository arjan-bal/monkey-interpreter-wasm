mod utils;

use wasm_bindgen::prelude::*;
use monkeyinterpreter::Interpreter;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, monkey-interpreter-wasm!");
}

#[wasm_bindgen]
pub struct Wrapper {
    interpreter: Interpreter,
}

#[wasm_bindgen]
impl Wrapper {
    pub fn new() -> Wrapper {
        Wrapper { interpreter: Interpreter::new() }
    }

    pub fn interpret(&mut self, input: &str) -> String {
        self.interpreter.interpret(input.to_owned())
    }
}
