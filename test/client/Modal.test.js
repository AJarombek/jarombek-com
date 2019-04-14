/**
 * Jest and Enzyme testing for the Modal React component
 * @author Andrew Jarombek
 * @since 6/24/2018
 */

import React from 'react';
import Modal from "../../src/client/Modal";

import {shallow} from "enzyme/build/index";
import sinon from "sinon";

test('Modal contains child', () => {
    const modal = shallow(<Modal><div>Hello!</div></Modal>);

    expect(modal.contains(<div>Hello!</div>)).toEqual(true);
});

test('Modal with no backdrop is missing the backdrop visible class', () => {
    const modalNoBackdrop = shallow(<Modal backdrop={false}><div>No Backdrop!</div></Modal>);

    modalNoBackdrop.find('.jarbek-modal-backdrop').simulate('click');
    expect(modalNoBackdrop.find('.jarbek-modal-backdrop-visible')).toHaveLength(0);
});

test('Modal Clicking Background Function Called', () => {

    const onClickBackground = sinon.spy();

    const modalOnClick = shallow(
        <Modal clickBackground={onClickBackground}>
            <div>No Backdrop!</div>
        </Modal>
    );

    modalOnClick.find('.jarbek-modal-backdrop').simulate('click');
    modalOnClick.find('.jarbek-modal').simulate('click');
    expect(onClickBackground).toHaveProperty('callCount', 1);
});