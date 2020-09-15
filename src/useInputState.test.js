import React from 'react';
import {shallow} from 'enzyme';
import  UseInputState from "./UseInputState";


  describe("UseInputState should", () => {
       it("renders", () => {
         const wrapper = shallow(<UseInputState />);
        expect(wrapper.getElements()).toMatchSnapshot();
        wrapper.unmount();
        
       });
     });
