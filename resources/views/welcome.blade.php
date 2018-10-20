<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta name="description" content=" ">

    <title>Inventory Management System </title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
</head>

    <body class="app sidebar-mini rtl">
        <div id="app">

            <header-component></header-component>
            <sidebar-component></sidebar-component>

               @yield('content')
            <footer-component></footer-component>

        </div>

        <script src="{{ asset('/js/app.js') }}"></script>
        <script src="{{ asset('/js/theme.js') }}"></script>
        <script src="{{ asset('/js/pace.min.js') }}"></script>

    </body>
</html>
