 @if (session()->has('Add'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{{ session()->get('Add') }}</strong>
    </div>
@endif
<a href="{{route('player.show')}}">player show</a>
<form action="{{route('player.store')}}" method="post">
    @csrf
    @method('POST')
    <input type="text" name="name" value="{{old('name')}}">
    <button type="submit">submit</button>
</form>