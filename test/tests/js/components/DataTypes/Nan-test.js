import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import JsonNan from '/react/src/js/components/DataTypes/Nan';
import DataTypeLabel from '/react/src/js/components/DataTypes/DataTypeLabel';

describe('<JsonNan />', function () {
    const rjvId = 1;

    it('Nan component should no data type label', function () {
        const wrapper = shallow(
            <JsonNan
            rjvId={rjvId}
            displayDataTypes={true}
            theme='rjv-default'/>
        );
        expect(wrapper.find(DataTypeLabel)).to.have.length(0);
    });

});