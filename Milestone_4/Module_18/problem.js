// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

let i = 16;
for(; i < 100; i++)
{
  let j = 1;

  for(; j * j <= i; j++)
  {
    if(j * j === i)
    {
      break;
    }
  }

  if(j * j === i)
  {
    break;
  }
}