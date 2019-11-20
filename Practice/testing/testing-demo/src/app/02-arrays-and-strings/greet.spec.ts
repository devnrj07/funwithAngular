import {greet} from './greet';

describe('test greet', ()=>{
    it('should return a name/ string entered with welcome preappend', ()=>{
        let result = greet('nrj')
        expect(result).toContain('nrj')
    })
})