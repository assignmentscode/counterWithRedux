import counter from './reducer';

describe('counter () :', () => {
    it('should return 5 when given value is 4 on action type INCREMENT_COUNTER', ()=>{
        expect(counter(4, { type:'INCREMENT_COUNTER' })).toEqual(5);
    });
    it('should return 3 when given value is 4 on action type INCREMENT_COUNTER', ()=>{
        expect(counter(4, { type:'DECREMENT_COUNTER' })).toEqual(3);
    });
    it('should return 4 when action type is not INCREMENT_COUNTER or DECREMENT_COUNTER', ()=>{
        expect(counter(4, { type:'CHANGE_COUNTER' })).toEqual(4);
    });
});