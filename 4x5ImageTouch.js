       import { Selector } from 'testcafe';
       import { selectPosFunction } from './selectPosFunction';
       
       
       fixture `Create keyboard layout`
           .page `http://10.186.71.222/WebApp/WEBAPP/Home/Home/`;
       
           test('Create new keyboard layout', async t => {
                var layoutName = "TestCafe 4x5 Touch Image";
                   

               await t
               // Log in
               .maximizeWindow()
               .typeText('input[name="UserName"]', 'Admin')
               .typeText('input[name="Password"]', 'Admin')
               .click('span#SubmitBtn')
       
               // Navigate to POC
               .click('div#TilePOC > a')
               // Navigate to Keyboard Maintenance
               .click("div#POCListView div.menuColumn > ul > li:nth-child(8) > span")
       
               // Select 'new' button
               .click('span#NewBtn')
               // Switch to iframe, enter description, layout and font scheme
               .switchToIframe('div#posKeyboardDetails iframe')
               .typeText('input[name="NewKeyboard\\2e Description0"]', layoutName)
               .click("div#tijit\\2f layout\\2f layoutview_column_9 div.dijitReset.dijitRight.dijitButtonNode.dijitArrowButton.dijitDownArrowButton.dijitArrowButtonContainer > input")
               .click("div.dijitPopup.dijitComboBoxMenuPopup > div > div:nth-child(8)")
               .click("div#tijit\\2f layout\\2f layoutview_column_15 div.dijitReset.dijitRight.dijitButtonNode.dijitArrowButton.dijitDownArrowButton.dijitArrowButtonContainer > input")
               .click("div:nth-child(3) > div > div:nth-child(2)")
               .click("div#tijit\\2f layout\\2f layoutview_column_17 input")  
               .click(Selector('div').withText('Arial'))

                // Switch back to main window, select 'OK' button
                .switchToMainWindow()
                .click(Selector('span').withText('OK'))
                      
                // Select the newly created layout by looking at the description
                .click(Selector('td').withText(layoutName))
                      
                //  Select 'Edit layout' button
                .click("span#editLayoutBtn_label")
                      
                // Assign a POS function to each button 
               
                var buttons = [];
               
                for (var i = 0; i<20; i++){
                    buttons.push(Selector(Selector('div').withAttribute('id', 'Keypad_3b089254-52f1-4543-bbe0-3e8a7b470b13_btn_' + i)))              
                }


                for(var i = 0; i<buttons.length; i++){
                    await t
                    .doubleClick(buttons[i])
                    .doubleClick(buttons[i])
                   
                    .click("#Keypad_3b089254-52f1-4543-bbe0-3e8a7b470b13_btn_" + i + " > div.tijitKeyLayout2EditIcon.dialogEdit")
                    await selectPosFunction(t)
                }
 
             //    Click 'Save' button
 
                await t 
                .click("span#saveButton_label")
 
               
 































           });