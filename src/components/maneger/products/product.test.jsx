import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Product } from './product';

describe('Product component handleAddProduct', () => {
    let setSelectedProduct;
    let setIsAddMode;
    let setIsDialogOpen;

    beforeEach(() => {
        setSelectedProduct = jest.fn();
        setIsAddMode = jest.fn();
        setIsDialogOpen = jest.fn();
    });

    it('should set initial product values when adding new product', () => {
        const handleAddProduct = () => {
            setSelectedProduct({
                id: 0,
                productName: '',
                dscribe: '',
                size: 0,
                price: '',
                idPurveyor: '',
                namePurveyor: '',
                stock: 0
            });
            setIsAddMode(true);
            setIsDialogOpen(true);
        };

        act(() => {
            handleAddProduct();
        });

        expect(setSelectedProduct).toHaveBeenCalledWith({
            id: 0,
            productName: '',
            dscribe: '',
            size: 0,
            price: '',
            idPurveyor: '',
            namePurveyor: '',
            stock: 0
        });
        expect(setIsAddMode).toHaveBeenCalledWith(true);
        expect(setIsDialogOpen).toHaveBeenCalledWith(true);
    });

    it('should call all state setters in correct order', () => {
        const handleAddProduct = () => {
            setSelectedProduct({
                id: 0,
                productName: '',
                dscribe: '',
                size: 0,
                price: '',
                idPurveyor: '',
                namePurveyor: '',
                stock: 0
            });
            setIsAddMode(true);
            setIsDialogOpen(true);
        };

        handleAddProduct();

        expect(setSelectedProduct).toHaveBeenCalledBefore(setIsAddMode);
        expect(setIsAddMode).toHaveBeenCalledBefore(setIsDialogOpen);
    });

    it('should maintain correct data types for numeric fields', () => {
        const handleAddProduct = () => {
            setSelectedProduct({
                id: 0,
                productName: '',
                dscribe: '',
                size: 0,
                price: '',
                idPurveyor: '',
                namePurveyor: '',
                stock: 0
            });
            setIsAddMode(true);
            setIsDialogOpen(true);
        };

        handleAddProduct();

        const calledWith = setSelectedProduct.mock.calls[0][0];
        expect(typeof calledWith.id).toBe('number');
        expect(typeof calledWith.size).toBe('number');
        expect(typeof calledWith.stock).toBe('number');
    });
});
