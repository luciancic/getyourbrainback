export const phoneStyles = { 
    menu: { display: 'grid', gridTemplateRows: '1fr 4fr', height: '100vh' },
    text: { alignSelf: 'end'},
    textH1: { fontSize: '3rem', padding: '0 1rem'},
    textP: { display: 'none'},
    buttons: { display: 'grid', gridTemplateRows: '1fr 1fr 1fr', placeItems:'center center', height: '85%'},
    buttonsFirst: { alignSelf:'end'},
    buttonsLast: { alignSelf:'start'}
}

export const desktopStyles = { 
    menu: { display: 'grid', gridTemplateColumns: '3fr 2fr', minHeight: '100vh' },
    text: { display: 'grid', gridTemplateRows: '1fr 2fr'},
    textH1: { fontSize: '3.3rem', alignSelf:'end', padding: '0 1rem'},
    textP: { fontSize: '2rem', padding: '0 5rem', alignSelf: 'start', textAlign: 'left'},
    buttons: { display: 'grid', gridTemplateRows: '1fr 1fr 1fr', placeItems:'center left', paddingLeft: '5rem'},
    buttonsFirst: { alignSelf:'end'},
    buttonsLast: { alignSelf:'start'}
}