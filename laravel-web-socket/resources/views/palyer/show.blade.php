
<a href="{{route('player.create')}}">player create</a>
<table class="table">
  <thead>
    <tr>
      {{--  <th scope="col">#</th>  --}}
      <th scope="col">Name</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    @foreach ($player as $key=>$item)
    <tr>
      {{--  <th scope="row">{{++$key}}</th>  --}}
      <td>{{$item->name}}</td>
      <td><a href="{{route('player.delete',$item->id)}}">Delete</a></td>
    </tr>
    @endforeach
  </tbody>
</table>

    @vite([ 'resources/js/app.js'])
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>