

export default function SelectHotel({hotel, setHotel}) {
    
    const hotelOptions = [
        { 
            value: 'fivesbeach,fivesdowntown,fivesmorelos,fivesresidence,tbbtf',
            label: 'ALL HOTELS'
         },
        {
            value: 'fivesresidence',
            label: 'THE FIVES BEACH HOTELS' 
        },
        { 
            value: 'fivesdowntown',
             label: 'THE FIVES DOWNTOWN' 
        },
        { 
            value: 'fivesmorelos',
             label: 'THE FIVES OCEAN FRONT' 
        },
        { 
            value: 'fivesbeach',
             label: 'THE FIVES BEACHFRONT BY THE FIVES' 
        },
      ];

     
    return (
        <>
        <select name="hotel" id="hotel" value={hotel} onChange={(e) => setHotel(e.target.value)} className="widget__select">
          {hotelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        </>
    )
}
