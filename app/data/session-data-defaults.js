/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {


"orgName": "Acme Org Ltd",
"numUsers": "5",
"numChildUsers": "1",
"numServices": "3",
"numAgents": "0",
"numLocations": "1",
"service": "Chemicals",
"serviceLine": "Comply with REACH IT",
"serviceRole": "REACH Manager",
"userType": "new",
"subscribeService": "no",
"accountAccess": "no",
"flowType": "task"


  // Insert values here

}
