using System;

namespace Movies.Models
{
    public class MovieData
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string genre { get; set; }
        public string duration { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int price { get; set; }
        public bool act { get; set; } //aktif atau tidaknya movie
    }
}