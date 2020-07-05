import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, unmount } from 'enzyme';
import { MemoryRouter, Route } from "react-router-dom";

import SearchMovie from 'component/SearchMovie';
import MovieDetail from 'component/MovieDetail';

configure({adapter: new Adapter()});

    describe('Search movie component', ()=> {
        const wrapper = shallow(<SearchMovie />);

        it('should render', ()=> {
        	//component should have render
        	expect(wrapper.exists()).toBe(true);
        });

        it('should have a search button', ()=> {

            //There should be only one input
            expect(wrapper.find('input')).toHaveLength(1);
        });	

        it('should not break with articles', ()=> {
        	expect(wrapper.find("li")).toHaveLength(0);
        });	

        it('should find movie name', ()=> {
        	// wrapper.find('input').simulate('change', {target: {value: 'marvel'}});
        	// expect(wrapper.find("ul")).toHaveLength(1);

			const component = mount(<SearchMovie />);
			component.find('input').simulate('keyup', { target: {value: 'marvel'} });
			expect(component).toMatchSnapshot();
			component.unmount();

        });

        it("redirects / to /movie_detail", () => {
		  const wrapper = mount(
		    <MemoryRouter initialEntries={['/']}>
		      <Route component={MovieDetail} />
		    </MemoryRouter>
		  );

		  expect(wrapper.find(MovieDetail).length).toBe(1);
		});
        
        it("Movie detail render", () => {

          const params = {
          		state : {
          			id : 'tt4154664'
          		}
          }	

		  const wrapper = mount(
		    <MemoryRouter initialEntries={['/']}>
		      <Route component={MovieDetail} {...params}/>
		    </MemoryRouter>
		  );

		  expect(wrapper.find(MovieDetail).length).toBe(1);
		});

    });