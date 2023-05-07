;;; Exercise 1.2
;;; Define a procedure that takes three numbers as arguments and returns the sum
;;; of the square of the two larger numbers.
(define (ret2squared x y z) 
  (cond ((and (< x y) (< x z)) (+(* y y) (* z z)))
        ((and (< y x) (< y z)) (+(* x x) (* z z)))
        ((and (< z y) (< z x)) (+(* y y) (* x x)))))

