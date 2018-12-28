import { shallow,configure } from 'enzyme';
import Widget from '../src/modules/Movie/Incoming/Widget';
import { FlatList } from 'react-native';
import incredibles from './../assets/incredibles.jpg';

import * as Adapter from 'enzyme-adapter-react-16';
import React from 'React';


describe('Hello world Test',()=>{

    it('1 + 1 should be 2',()=>{
        expect(1+1).toEqual(2);
    });

    it('sadasd',()=>{

        const MOVIES = [
            {title:"Increadables",
                banner: incredibles,
                genres: ["Action","Animation","Comedy"],
                isBuyMode:true},
                {title:"Increadables 2",
                banner: incredibles,
                genres: ["Action","Animation","Comedy"],
                isBuyMode:true},
                {title:"Increadables 3",
                banner: incredibles,
                genres: ["Action","Animation","Comedy"],
                isBuyMode:true},
                {title:"Increadables 4",
                banner: incredibles,
                genres: ["Action","Animation","Comedy"],
                isBuyMode:true},
                {title:"Increadables 5",
                banner: incredibles,
                genres: ["Action","Animation","Comedy"],
                isBuyMode:true}
        
        ]
        
        const component = shallow(
            <Widget 
            movies={MOVIES}
            selectedMovieIndex={3}
            handleGetItem={(movie,index)=>jest.fn()}
        />
          );

          expect(component.find(FlatList).at(0).props().data.length()).toEqual(5);
    })

});