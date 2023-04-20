using System;
using System.IO;
using AngularForm.Models;
using Newtonsoft.Json;

namespace AngularForm.Service
{
    public class FileService
    {
        public FileService()
        {
        }

        public bool CreateJsonFile(Name name)
        {
            var success = false;

            if (!string.IsNullOrWhiteSpace(name.FirstName) && !string.IsNullOrWhiteSpace(name.LastName))
            {
                var firstName = name.FirstName;
                var lastName = name.LastName;

                // create JSON file
                var folderPath = @"~/../Json/";

                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                var fileName = @$"{folderPath}/{firstName}_{lastName}_{DateTime.Now:ddMMyyyy}.json";

                var json = JsonConvert.SerializeObject(name);

                File.WriteAllText(fileName, json);

                success = true;
            }

            return success;
        }
    }
}
