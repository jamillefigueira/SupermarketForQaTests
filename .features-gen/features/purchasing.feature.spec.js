// Generated from: features\purchasing.feature
import { test } from "../../steps/fixtures.js";

test.describe('Supermarket purchasing flow', () => {

  test.describe('Search and purchase a product', () => {

    test('Example #1', async ({ Given, When, Then, And }) => { 
      await Given('I am on the supermarket website'); 
      await When('I search for "Canned Soup"'); 
      await Then('I should see the product "Canned Soup" with price "0.49"'); 
      await When('I open the product details'); 
      await Then('the product name should be "Canned Soup"'); 
      await And('the product price should be "0.49"'); 
      await When('I add the product to the cart'); 
      await Then('the cart should contain "Canned Soup" with price "0.49"'); 
    });

    test('Example #2', async ({ Given, When, Then, And }) => { 
      await Given('I am on the supermarket website'); 
      await When('I search for "Cherry Soda"'); 
      await Then('I should see the product "Cherry Soda" with price "0.99"'); 
      await When('I open the product details'); 
      await Then('the product name should be "Cherry Soda"'); 
      await And('the product price should be "0.99"'); 
      await When('I add the product to the cart'); 
      await Then('the cart should contain "Cherry Soda" with price "0.99"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\purchasing.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  $world: [({ world }, use) => use(world), { scope: 'test', box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the supermarket website","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I search for \"Canned Soup\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Canned Soup\"","children":[{"start":14,"value":"Canned Soup","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the product \"Canned Soup\" with price \"0.49\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Canned Soup\"","children":[{"start":26,"value":"Canned Soup","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"0.49\"","children":[{"start":51,"value":"0.49","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I open the product details","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the product name should be \"Canned Soup\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Canned Soup\"","children":[{"start":28,"value":"Canned Soup","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the product price should be \"0.49\"","stepMatchArguments":[{"group":{"start":28,"value":"\"0.49\"","children":[{"start":29,"value":"0.49","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I add the product to the cart","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the cart should contain \"Canned Soup\" with price \"0.49\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Canned Soup\"","children":[{"start":25,"value":"Canned Soup","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"0.49\"","children":[{"start":50,"value":"0.49","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":20,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the supermarket website","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I search for \"Cherry Soda\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Cherry Soda\"","children":[{"start":14,"value":"Cherry Soda","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the product \"Cherry Soda\" with price \"0.99\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Cherry Soda\"","children":[{"start":26,"value":"Cherry Soda","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"0.99\"","children":[{"start":51,"value":"0.99","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I open the product details","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the product name should be \"Cherry Soda\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Cherry Soda\"","children":[{"start":28,"value":"Cherry Soda","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the product price should be \"0.99\"","stepMatchArguments":[{"group":{"start":28,"value":"\"0.99\"","children":[{"start":29,"value":"0.99","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I add the product to the cart","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the cart should contain \"Cherry Soda\" with price \"0.99\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Cherry Soda\"","children":[{"start":25,"value":"Cherry Soda","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"0.99\"","children":[{"start":50,"value":"0.99","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end