interface User {
  name: string,
  age?: number,
  readonly isMale: boolean,
  say: Say
}

// const getUserName = (user:User) => user.isMale = false;

interface  Say {
  (words: string) : string
}


interface Config {
  width?: number
}

function CalculateAreas (config: Config) : {area: string} {
  let area = 1;
  area *= config.width|| 2;
  return {
    area: area.toString()
  }
}

let test = CalculateAreas({width: 3})
console.log(test)

interface Hello extends Say, Config {
  smileBoolean: boolean
}

