<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function jwtLogin(Request $request)
    {
        $this->validateLogin($request);

        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        try {
            $credentials = $request->only('email', 'password');
            $token = \JWTAuth::attempt($credentials);
        } catch (\JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        if (!empty($token)) {
            //to equal result for login and storage token checking
            return $this->jwtCheck($token);
        }

        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

    /**
     * Return user by jwt
     *
     * @param string $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function jwtCheck($token = '')
    {
        if (empty($token)) {
            $token = (string)\JWTAuth::getToken();
        }

        $user = \JWTAuth::toUser($token);

        return response()->json(compact('token', 'user'));
    }
}
