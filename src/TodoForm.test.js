import React from 'react';
import {shallow} from 'enzyme';
import  TodoForm from "./TodoForm";


  describe("TodoForm should", () => {
       it("renders", () => {
         const wrapper = shallow(<TodoForm />);
        expect(wrapper.getElements()).toMatchSnapshot();
        expect(wrapper.exists()).toBe(true);
        wrapper.unmount();
        
       });
     });
