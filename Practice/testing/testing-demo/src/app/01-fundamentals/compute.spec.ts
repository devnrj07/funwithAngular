import {compute} from './compute';

describe('test compute',() =>{
    it('should be zero when input is negative', () =>{
        let result = compute(-1)
        expect(result).toBe(0)
    })
    
    it('should be positive when input is positive', () =>{
        let result = compute(1)
        expect(result).toBe(2)
    })

    
})