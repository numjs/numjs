# NumJS
NumJS Library is made for Scientific Computing in Javascript

Inspired by Numpy and Scipy Python Libraries

Interested in helping out? Contact <hello@josephmilla.com>.

## Installation
`<script src="num.js"></script>`

## Usage
`nj.<method>(<parameters>,...)`

## Basics

`inv(a[, overwrite_a, check_finite])`	Compute the inverse of a matrix.

`solve(a, b[, sym_pos, lower, overwrite_a, ...])`	Solve the equation a x = b for x.

`solve_banded(l_and_u, ab, b[, overwrite_ab, ...])`	Solve the equation a x = b for x, assuming a is banded matrix.

`solveh_banded(ab, b[, overwrite_ab, ...])`	Solve equation a x = b.

`solve_triangular(a, b[, trans, lower, ...])`	Solve the equation a x = b for x, assuming a is a triangular matrix.

`det(a[, overwrite_a, check_finite])`	Compute the determinant of a matrix

`norm(a[, ord])`	Matrix or vector norm.

`lstsq(a, b[, cond, overwrite_a, ...])`	Compute least-squares solution to equation Ax = b.

`pinv(a[, cond, rcond, return_rank, check_finite])`	Compute the (Moore-Penrose) pseudo-inverse of a matrix.

`pinv2(a[, cond, rcond, return_rank, ...])`	Compute the (Moore-Penrose) pseudo-inverse of a matrix.

`pinvh(a[, cond, rcond, lower, return_rank, ...])`	Compute the (Moore-Penrose) pseudo-inverse of a Hermitian matrix.

`kron(a, b)`	Kronecker product.

`tril(m[, k])`	Make a copy of a matrix with elements above the k-th diagonal zeroed.

`triu(m[, k])`	Make a copy of a matrix with elements below the k-th diagonal zeroed.

`orthogonal_procrustes(A, B[, check_finite])`	Compute the matrix solution of the orthogonal Procrustes problem.

## Eigenvalue Problems

`eig(a[, b, left, right, overwrite_a, ...])`	Solve an ordinary or generalized eigenvalue problem of a square matrix.

`eigvals(a[, b, overwrite_a, check_finite])`	Compute eigenvalues from an ordinary or generalized eigenvalue problem.

`eigh(a[, b, lower, eigvals_only, ...])`	Solve an ordinary or generalized eigenvalue problem for a complex Hermitian or real symmetric matrix.

`eigvalsh(a[, b, lower, overwrite_a, ...])`	Solve an ordinary or generalized eigenvalue problem for a complex Hermitian or real symmetric matrix.

`eig_banded(a_band[, lower, eigvals_only, ...])`	Solve real symmetric or complex hermitian band matrix eigenvalue problem.

`eigvals_banded(a_band[, lower, ...])`	Solve real symmetric or complex hermitian band matrix eigenvalue problem.



## Decompositions

`lu(a[, permute_l, overwrite_a, check_finite])`	Compute pivoted LU decomposition of a matrix.

`lu_factor(a[, overwrite_a, check_finite])`	Compute pivoted LU decomposition of a matrix.

`lu_solve(lu_and_piv, b[, trans, ...])`	Solve an equation system, a x = b, given the LU factorization of a

`svd(a[, full_matrices, compute_uv, ...])`	Singular Value Decomposition.

`svdvals(a[, overwrite_a, check_finite])`	Compute singular values of a matrix.

`diagsvd(s, M, N)`	Construct the sigma matrix in SVD from singular values and size M, N.

`orth(A)`	Construct an orthonormal basis for the range of A using SVD`

`cholesky(a[, lower, overwrite_a, check_finite])`	Compute the Cholesky decomposition of a matrix.`

`cholesky_banded(ab[, overwrite_ab, lower, ...])`	Cholesky decompose a banded Hermitian positive-definite matrix`

`cho_factor(a[, lower, overwrite_a, check_finite])`	Compute the Cholesky decomposition of a matrix, to use in cho_solve`

`cho_solve(c_and_lower, b[, overwrite_b, ...])`	Solve the linear equations A x = b, given the Cholesky factorization of A.

`cho_solve_banded(cb_and_lower, b[, ...])`	Solve the linear equations A x = b, given the Cholesky factorization of A.

`polar(a[, side])`	Compute the polar decomposition.

`qr(a[, overwrite_a, lwork, mode, pivoting, ...])`	Compute QR decomposition of a matrix.

`qr_multiply(a, c[, mode, pivoting, ...])`	Calculate the QR decomposition and multiply Q with a matrix.

`rq(a[, overwrite_a, lwork, mode, check_finite])`	Compute RQ decomposition of a matrix.

`qz(A, B[, output, lwork, sort, overwrite_a, ...])`	QZ decomposition for generalized eigenvalues of a pair of matrices.

`schur(a[, output, lwork, overwrite_a, sort, ...])`	Compute Schur decomposition of a matrix.

`rsf2csf(T, Z[, check_finite])`	Convert real Schur form to complex Schur form.

`hessenberg(a[, calc_q, overwrite_a, ...])`	Compute Hessenberg form of a matrix.

See also

scipy.linalg.interpolative – Interpolative matrix decompositions

## Matrix Functions

`expm(A[, q])`	Compute the matrix exponential using Pade approximation.

`logm(A[, disp])`	Compute matrix logarithm.

`cosm(A)`	Compute the matrix cosine.

`sinm(A)`	Compute the matrix sine.

`tanm(A)`	Compute the matrix tangent.

`coshm(A)`	Compute the hyperbolic matrix cosine.

`sinhm(A)`	Compute the hyperbolic matrix sine.

`tanhm(A)`	Compute the hyperbolic matrix tangent.

`signm(A[, disp])`	Matrix sign function.

`sqrtm(A[, disp, blocksize])`	Matrix square root.

`funm(A, func[, disp])`	Evaluate a matrix function specified by a callable.

`expm_frechet(A, E[, method, compute_expm, ...])`	Frechet derivative of the matrix exponential of A in the direction E.

`expm_cond(A[, check_finite])`	Relative condition number of the matrix exponential in the Frobenius norm.

`fractional_matrix_power(A, t)`	Compute the fractional power of a matrix.

## Matrix Equation Solvers

`solve_sylvester(a, b, q)`	Computes a solution (X) to the Sylvester equation (AX + XB = Q).

`solve_continuous_are(a, b, q, r)`	Solves the continuous algebraic Riccati equation, or CARE, defined as (A’X + XA - XBR^-1B’X+Q=0) directly using a Schur decomposition method.

`solve_discrete_are(a, b, q, r)`	Solves the disctrete algebraic Riccati equation, or DARE, defined as (X = A’XA-(A’XB)(R+B’XB)^-1(B’XA)+Q), directly using a Schur decomposition method.

`solve_discrete_lyapunov(a, q[, method])`	Solves the discrete Lyapunov equation (A′XA−X=−Q).

`solve_lyapunov(a, q)`	Solves the continuous Lyapunov equation (AX + XA^H = Q) given the values of A and Q using the Bartels-Stewart algorithm.

## Special Matrices

`block_diag(*arrs)`	Create a block diagonal matrix from provided arrays.

`circulant(c)`	Construct a circulant matrix.

`companion(a)`	Create a companion matrix.

`dft(n[, scale])`	Discrete Fourier transform matrix.

`hadamard(n[, dtype])`	Construct a Hadamard matrix.

`hankel(c[, r])`	Construct a Hankel matrix.

`hilbert(n)`Create a Hilbert matrix of order n.

`invhilbert(n[, exact])`	Compute the inverse of the Hilbert matrix of order n.

`leslie(f, s)`	Create a Leslie matrix.

`pascal(n[, kind, exact])`	Returns the n x n Pascal matrix.

`toeplitz(c[, r])`	Construct a Toeplitz matrix.

`tri(N[, M, k, dtype])`	Construct (N, M) matrix filled with ones at and below the k-th diagonal.

## Low-level routines

`get_blas_funcs(names[, arrays, dtype])`	Return available BLAS function objects from names.

`get_lapack_funcs(names[, arrays, dtype])`	Return available LAPACK function objects from names.

`find_best_blas_type([arrays, dtype])`	Find best-matching BLAS/LAPACK type.
