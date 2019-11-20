import {getCurrencies} from './getCurrencies';

describe('test getCurrencies', ()=>{
    it('should return all the values', ()=>{
        let result = getCurrencies()
        expect(result).toContain('USD')
        expect(result).toContain('AUD')
        expect(result).toContain('EUR')
    })
})