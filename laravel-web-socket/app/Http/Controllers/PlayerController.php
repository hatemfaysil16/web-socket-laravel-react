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
    public function create()
    {
        return \view('palyer.create');
    }
    public function store(Request $request)
    {
        event (new \App\Events\NewTrade($request->name));
        // Player::create(['name'=>$request->name]);
        return redirect()->back()->with('Add','success');       
    }
    public function delete(Player $player)
    {
        $player->delete();
        return redirect()->back()->with('Add','success');       
    }

}
