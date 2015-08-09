import Control.Monad

{-
Solution to the
  S E N D
  M O R E
  -------
M O N E Y

puzzle
-}

data Solution = Solution {s :: Integer, e :: Integer, n :: Integer, d :: Integer, m :: Integer, o :: Integer, r :: Integer, y :: Integer} deriving Show;

sumDigits :: [Integer] -> Integer
sumDigits ds =
 let sumDigits' [] = 0
     sumDigits' (d:ds) = d + 10 * sumDigits'(ds)
  in sumDigits' $ reverse ds

{-
Attempt at idiomatic nondeterministic programming using the List monad, in which
each list starts with a list of possible solutions and the guards ensure that each digit
is unique.

-}
sendMoney :: [Solution]
sendMoney = let digits = [0..9] in do {
  m <- digits;
  guard (m == 1);
  s <- digits;
  guard (not $ s == m);
  e <- digits;
  guard (not $ e `elem` [m,s]);
  n <- digits;
  guard (not $ n `elem` [m,s,e]);
  d <- digits;
  guard (not $ d `elem` [m,s,e,n]);
  o <- digits;
  guard (not $ o `elem` [m,s,e,n,d]);
  r <- digits;
  guard (not $ r `elem` [m,s,e,n,d,o]);
  y <- digits;
  guard (not $ y `elem` [m,s,e,n,d,o,r]);

  guard ((sumDigits [s,e,n,d]) + (sumDigits [m,o,r,e]) == (sumDigits [m,o,n,e,y]));
  return Solution {s = s, e  = e, n = n, d = d, m  = m, o = o, r  = r, y  = y }
}

main = do
  forM_ sendMoney $ \soln ->  do {
    putStrLn (" SEND:  " ++ (show $ sumDigits [s soln, e soln, n soln, d soln]));
    putStrLn (" MORE:  " ++ (show $ sumDigits [m soln, o soln, r soln, e soln]));
    putStrLn ("MONEY: " ++ (show $ sumDigits [m soln, o soln, n soln, e soln, y soln]))
  }
