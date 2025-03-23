import { Injectable } from '@nestjs/common';
import { MahasiswaDTO } from './mhs.dto';
import { Mahasiswa } from './mhs.entity';

@Injectable()
export class MhsService {
    private currentId : number = 0;
    private Mhs : Mahasiswa[] = [];

    delete(id: number){
        this.Mhs = this.Mhs.filter((mhs) => mhs.id != id);
    }
    updateOne(id: number, mhsDTO : MahasiswaDTO) {
        this.Mhs.forEach((mhs) => {
            if(mhs.id == id){
                mhs.email = mhsDTO.email;
                mhs.fakultas = mhsDTO.fakultas;
                mhs.jurusan = mhsDTO.jurusan;
                mhs.nama = mhsDTO.nama;
            }
        });
    }
    findOne(id: number) : Mahasiswa[] {
        return this.Mhs.filter((mhs) => mhs.id == id)
    }
    findAll() : Mahasiswa[] {
        return this.Mhs
    }
    create(mhsDTO: MahasiswaDTO) {
        const newMhs: Mahasiswa = {
            id : this.currentId,
            nama : mhsDTO.nama,
            email : mhsDTO.email,
            jurusan : mhsDTO.jurusan,
            fakultas : mhsDTO.fakultas
    }
    ++this.currentId;
    this.Mhs.push(newMhs);
}
}
function mhs(value: Mahasiswa, index: number, array: Mahasiswa[]): void {
    throw new Error('Function not implemented.');
}

