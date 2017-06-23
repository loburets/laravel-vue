/**
 *
 * How to use:
 *
 * axios.post(/some-url', someDataFromYourStore.inputs).then((response) => {
 *      //something what you want
 * }).catch((error) => {
 *    //catch the laravel validation response, just to add this:
 *    context.commit(UPDATE_INPUTS_ERRORS_MUTATION, error)
 * })
 *
 */

/**
 * Process response in error case
 * @type {string}
 */
export const UPDATE_INPUTS_ERRORS_MUTATION = 'UPDATE_INPUTS_ERRORS_MUTATION'

/**
 * Update value of input in the store after type
 * @type {string}
 */
export const UPDATE_INPUT_MUTATION = 'UPDATE_INPUT_MUTATION'

/**
 * Add this mutations to your vuex store
 *
 * @type {{[UPDATE_INPUTS_ERRORS_MUTATION]: ((state, error)), [UPDATE_INPUT_MUTATION]: ((state, input))}}
 */
export let inputMutations = {
     [UPDATE_INPUTS_ERRORS_MUTATION] (state, error) {
         state.inputsErrors = error.response.data
     },
     [UPDATE_INPUT_MUTATION] (state, input) {

         if (typeof(state.inputs) !== 'object') {
             state.inputs = {}
         }

         if (typeof(state.inputs[input.name]) !== 'object') {
             state.inputs[input.name] = {}
         }

         state.inputs[input.name].value = input.value
     },
}

/**
 * Add this variables to your vuex store initial state
 * 
 * @type {{inputs: {}, inputsErrors: {}}}
 */
export let inputStateVariables = {
    inputs: {},
    inputsErrors: {},
}