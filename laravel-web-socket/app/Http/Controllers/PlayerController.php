<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function index()
    {
        $player = Player::get();
        return \view('palyer.show',\compact('player'));
    }
    public function player()
    {
        header('Access-Control-Allow.Origin:  *');
header('Access-Control-Allow.Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content - Type, X-Auth - Token, Origin, Authorization');
        $player = Player::get();
        return \response()->json($player);
    }
    public function create()
    {
        return \view('palyer.create');
    }
    public function store(Request $request)
    {
        event (new \App\Events\NewTrade($request->id,$request->name));
        Player::create(['name'=>$request->name]);
        return redirect()->back()->with('Add','success');       
    }
    public function delete(Player $player)
    {
        $player->delete();
        return redirect()->back()->with('Add','success');       
    }

}
