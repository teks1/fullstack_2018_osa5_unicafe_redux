const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  
  const counterReducer = (state = initialState, action) => {
    const copy = Object.assign({}, state)
    switch (action.type) { 
      case 'GOOD':
        ++copy.good
        return copy
      case 'OK':
         ++copy.ok
      return copy
      case 'BAD':
        ++copy.bad
      return copy
      case 'ZERO':
        copy.good = 0
        copy.ok = 0
        copy.bad = 0
        return copy
    }
    
    return state
  }
  
  export default counterReducer
