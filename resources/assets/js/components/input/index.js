/**
 *
 * How to use:
 *
 * 1) Add inputMutations mutations to your vuex store:
 *
 *      ,...inputMutations,
 *
 * 2) Add this inputStateVariables to your vuex store initial state
 *
 *      ,...inputStateVariables,
 *
 * 3) In your action:
 *
 * axios.post(/some-url', someDataFromYourStore.inputs).then((response) => {
 *      //something what you want
 *      //then reset data of inputs
 *      context.commit(RESET_INPUTS_MUTATION)
 * }).catch((error) => {
 *    //catch the laravel validation response, just to add this:
 *    context.commit(UPDATE_INPUTS_ERRORS_MUTATION, error)
 * })
 *
 * 4) PROFIT!
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
 * Reset inputs data after end of work with component
 * @type {string}
 */
export const RESET_INPUTS_MUTATION = 'RESET_INPUTS_MUTATION'

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
         state.inputs[input.name] = input.value
     },
     [RESET_INPUTS_MUTATION] (state) {
         state.inputs = {}
         state.inputsErrors = {}
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