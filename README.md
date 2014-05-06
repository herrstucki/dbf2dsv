# dbf2dsv

A command-line program to convert [DBF](http://www.digitalpreservation.gov/formats/fdd/fdd000325.shtml) files to [DSV](http://en.wikipedia.org/wiki/Delimiter-separated_values).

## Installation

```shell
npm install dbf2dsv -g
```

## Usage

Specify the target file with `-o` or `--out`

```shell
dbf2dsv --out foo.tsv -- foo.dbf
```

or write to `/dev/stdout` (default).

```shell
dbf2dsv -- foo.dbf > foo.tsv
```

Specify a custom delimiter with `-d` or `--delimiter` (default is `\t`)

```shell
dbf2dsv --out foo.tsv --delimiter=; -- foo.dbf
```

## Author

Jeremy Stucki, [Interactive Things](http://interactivethings.com)

## License

BSD, see LICENSE