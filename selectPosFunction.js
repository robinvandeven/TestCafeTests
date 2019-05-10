import { Selector } from 'testcafe';

 
 export async function selectPosFunction (t) {
        await t 

        .switchToIframe("div#EditDialog iframe")

//      Selecte 'Arrow' to expand POS function dropdown menu 
        .click("div#tijit\\2f layout\\2f layoutview_column_1 div.dijitReset.dijitRight.dijitButtonNode.dijitArrowButton.dijitDownArrowButton.dijitArrowButtonContainer")
           
        var posFunctions = [];
            
//      Store POS functions in an array
        for(var i = 2; i<122; i++){
         posFunctions.push(Selector('div.dijitPopup.dijitComboBoxMenuPopup > div > div:nth-child('+ i +')'));
        }

//      Generate a random number between 0 and the length of the array of POS functions
        var random = Math.floor(Math.random() * (posFunctions.length))
//      Select a random POS function 
        var posFunction = posFunctions[random];
//      Store innertext of POS function in a variable
        const text = await Selector(posFunction).innerText;


            await t 
//          Select the POS function from the dropdown menu
            .click(posFunction)     

            await t 
//          Type the innertext of the POS function in the 'Description' field  
            .typeText('input[name="SelectedButton\\2e Description0"]', text)

//          Click 'OK' Button
            .switchToMainWindow();

            await t.expect(Selector("span#dijit_form_Button_0").visible).ok();
            await t 
           .click("span#dijit_form_Button_0")     
            
            };
   
           
   
