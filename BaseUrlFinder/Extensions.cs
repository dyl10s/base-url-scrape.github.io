using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseUrlFinder
{
    public static class Extensions
    {
        public static string[] splitString(this string input, string splitText)
        {
            return input.Split(new string[] { splitText }, StringSplitOptions.None);
        }
    }
}
