using System;

namespace pro2
{

    class pesawat_tempur : Pesawat
    {
        public void terbangtinggi()
        {
            Console.WriteLine("pesawat tempur dengan nama, yang mempunyai jumlah roda, sedang berada pada ketinggian dengan membawa " +
            "jumlah penumpang sebanyak akan meledakan senjata" + this.nama + this.jumlahroda + this.Ketinggian + this.jumlahpenumpang);
        }
    }
}